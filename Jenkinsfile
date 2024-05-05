pipeline{
    agent any
    

    tools {
        nodejs 'node' 
    }

    options{
        ansiColor('xterm')
    }

    

    stages {
        stage('Build') {
            steps {
                echo "Building application"
            }
        }
        stage('Testing') {
            steps {
                echo "Running tests"
                // Configuración del entorno
                
                
                sh "npm install"
                sh "npx cypress run"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying the app"
            }
        }
}

    post{
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/cucumber-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '',useWrapperFileDirectly: true])
        }
    }
}