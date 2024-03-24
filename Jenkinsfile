pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('Test') {
            steps {
                 dir('app') {
                   bat 'yarn'
                   bat 'yarn test'
    }
            }
        }
        stage('Build') {
            steps {
                bat 'yarn build'
            }
        }
    }
}
