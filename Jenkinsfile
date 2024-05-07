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
            sh 'echo "npm bla bla bla"'
          }
        }

        stage('logs') {
          steps {
            sh 'ls -la'
          }
        }

      }
    }

    stage('build') {
      steps {
        sh 'docker build -f myProjectCypress/Dockerfile .'
      }
    }

  }
}