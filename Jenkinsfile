pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/toolsknowledge/demo-appln.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t node-cicd-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                docker run -d --name node-app -p 3000:3000 node-cicd-app
                '''
            }
        }
    }
}