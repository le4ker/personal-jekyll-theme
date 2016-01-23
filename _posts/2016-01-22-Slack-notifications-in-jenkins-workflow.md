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

NOTE: if you want to copy paste this... get it from my gist

<pre><code data-trim class="groovy">
#!groovy
// These 2 need to be authorized using jenkins script approval
// http://your.jenkins.host/scriptApproval/
import groovy.json.JsonOutput
import java.util.Optional

// Add whichever params you think you'd most want to have
// replace the slackURL below with the hook url provided by
// slack when you configure the webhook

def notifySlack(text, channel, attachments) {

    //your  slack integration url
    def slackURL = 'https://hooks.slack.com/services/AAAA/AAAA' 
    //from the jenkins wiki, you can updload an avatar and
    //use that one
    def jenkinsIcon = 'https://wiki.jenkins-ci.org/download/attachments/327683/JENKINS?version=1&modificationDate=1302750804000'
    
    def payload = JsonOutput.toJson([text      : text,
                                     channel   : channel,
                                     username  : "jenkins",
                                     icon_url: jenkinsIcon,
                                     attachments: attachments])
                                     
    sh "curl -X POST --data-urlencode \'payload=${payload}\' ${slackURL}"
}

//get me a node
node {

    //this try if for build failures
    try {
        stage 'COMPILE'
        checkout scm
        
        // Example using gradle
        sh './gradlew clean build'
        step $class: 'JUnitResultArchiver', testResults: '**/TEST-*.xml'
        
        //only publish when on master branch
        if (env.BRANCH_NAME == 'master') {
        	stage 'PUBLISH'
        	sh './gradlew publish'
        }
        
        // currentBuild.result will be null if no problem
        // or UNSTABLE if the JunitResultArchiver found failing tests
        def buildColor = currentBuild.result == null? "good": "warning"
        def buildStatus = currentBuild.result == null? "Success": currentBuild.result
        //configure emoji, because that's what millenials do
        def buildEmoji = currentBuild.result == null? ":smirk:":":cold_sweat:"
        
        //modify #build-channel to the build channel you want
        //for public channels don't forget the # (hash)
        notifySlack("${buildStatus}", "#build-channel",
            [[
                title: "${env.JOB_NAME} build ${env.BUILD_NUMBER}",
                color: buildColor,
                text: """${buildEmoji} Build ${buildStatus}. 
                |${env.BUILD_URL}
                |branch: ${env.BRANCH_NAME}""".stripMargin()
            ]])
    } catch (e) {
        //modify #build-channel to the build channel you want
        //for public channels don't forget the # (hash)
        notifySlack("build failed", "#build-channel",
            [[
                title: "${env.JOB_NAME} build ${env.BUILD_NUMBER}",
                color: "danger",
                text: """:dizzy_face: Build finished with error. 
                |${env.BUILD_URL}
                |branch: ${env.BRANCH_NAME}""".stripMargin()
            ]])
        throw e
    }
    
}
</code></pre>


