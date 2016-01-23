---
layout: post
section-type: post
title: Jenkins multibranch workflow + junit test results + slack notifications
category: Tech
tags:
  - Jenkins
  - Workflow
  - Slack
---
### What I wanted to achieve

This is what I wanted to achieve:

- Build per branch.
- Only publish artifacts (it's java) when on the master branch
- JUnit test report and trend per branch. 
- Slack notifications on build failures, unstable builds, and build success.
- Slack notifications should be useful and provide information

### Initial research (base code)

While trying to achieve this, I noticed that the Jenkins workflow plugin GitHub repo already had [sample code to send slack notifications](https://github.com/jenkinsci/workflow-examples/tree/master/pipeline-examples/slacknotify) , I adapted this code and added colors for the different statuses. 

<pre><code data-trim class="groovy">
import groovy.json.JsonOutput
// Add whichever params you think you'd most want to have
// replace the slackURL below with the hook url provided by
// slack when you configure the webhook
def notifySlack(text, channel) {
    def slackURL = 'https://hooks.slack.com/services/xxxxxxx/yyyyyyyy/zzzzzzzzzz'
    def payload = JsonOutput.toJson([text      : text,
                                     channel   : channel,
                                     username  : "jenkins",
                                     icon_emoji: ":jenkins:"])
    sh "curl -X POST --data-urlencode \'payload=${payload}\' ${slackURL}"
}
</code></pre>

### Adapted code

NOTE: if you want to copy paste this, click use the [raw version](https://gist.githubusercontent.com/portenez/9ba86a507270c744400e/raw/e03b80e3150478b1b7b1c296f89d359a69523d76/Jenkinsfile).

<script src="https://gist.github.com/portenez/9ba86a507270c744400e.js"></script>


