pipeline{
    agent any
    

    tools {
        nodejs 'node' 
    }

    options{
        ansiColor('xterm')
    }

    stages {
        stage('Checkout Repo') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo "Building application"
            }
        }
        
        stage('Run Tests') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        echo "Running unit tests"
                        // Coloca aquí los comandos para ejecutar tus pruebas unitarias
                    }
                }
                stage('Integration Tests') {
                    steps {
                        echo "Running integration tests"
                        // Coloca aquí los comandos para ejecutar tus pruebas de integración
                    }
                }
                stage('Test on Chrome') {
                    steps {
                        echo "Running tests on Chrome"
                        // Coloca aquí los comandos para ejecutar tus pruebas en Chrome
                        sh "export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
                        sh "npm install"
                        sh "npx cypress run"
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo "Deploying the app"
            }
        }
    }    

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/cucumber-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '',useWrapperFileDirectly: true])
        }
    }

}