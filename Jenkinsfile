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
                   sh 'npm install --registry https://registry.npmjs.org'
                   sh 'npm run test'
    }
            }
        }
        stage('Build') {
            steps {
                 dir('app') {
                sh 'npm run build'
                 }
            }
        }
    }
}
