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
        stage('Build Image') {
            steps {
                 dir('app') {
                   sh 'docker build -t my-react:1.0 .' 
                 }
            }
        }
    }
}
