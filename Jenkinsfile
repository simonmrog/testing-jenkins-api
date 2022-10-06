pipeline {
    agent any
    stages {
        // stage("Clean Up"){
        //     steps {
        //         deleteDir()
        //     }
        // }
        // stage("Clone Repo"){
        //     steps {
        //         sh "git clone https://github.com/simonmrog/testing-jenkins-api.git"
        //     }
        // }
        stage("Build"){
            steps {
                dir("testing-jenkins-api") {
                    sh "git checkout develop"
                    sh "npm install"
                }
            }
        }
        stage("Test"){
            steps {
                dir("testing-jenkins-api") {
                    sh "npm run test"
                }
            }
        },
        stage("Complete") {
            steps {
                echo "Job Completed!"
            }
        }
    }
}
