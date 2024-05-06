pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/xcode98/myProjectCypress', branch: 'main')
      }
    }

    stage('Test on Chrome') {
      parallel {
        stage('Test on Chrome') {
          steps {
            sh 'cd cypress && npm i && npx cypress run'
          }
        }

        stage('logs') {
          steps {
            sh 'ls -la'
          }
        }

      }
    }

  }
}