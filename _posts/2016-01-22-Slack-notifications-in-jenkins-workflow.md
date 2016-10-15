---
layout: post
section-type: post
title: Jenkins multibranch workflow + junit test results + slack notifications
category: Tech
tags:
  - Jenkins
  - Workflow
  - Slack
  - Junit
---
Here is an example of Jenkinsfile that implements slack notifications, junit results, and other goodies.

### What I wanted to achieve

This is what I wanted to achieve:

- Build every commit, on every branch
- Only publish artifacts (it’s java) when on the master branch
- Publish JUnit test report and trend per branch.
- Send Slack notifications on build failures, unstable builds, and build success.
- The Slack notifications should be useful and provide information

### Initial research (base code)

While trying to achieve this, I discovered that there was already [an example to send slack notifications](https://github.com/jenkinsci/workflow-examples/tree/master/pipeline-examples/slacknotify) in Jenkins workflow plugin GitHub repo. I adapted this code by adding colors for the different statuses.

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
