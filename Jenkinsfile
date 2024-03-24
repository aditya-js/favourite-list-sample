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
                   bat 'npm install'
                   bat 'npm test'
    }
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
