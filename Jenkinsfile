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
                   bat 'npm install --registry https://registry.npmjs.org'
                   bat 'npm run test'
    }
            }
        }
        stage('Build') {
            steps {
                 dir('app') {
                bat 'npm run build'
                 }
            }
        }
    }
}
