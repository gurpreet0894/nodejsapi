pipeline {
  agent any
  parameters {
      string(name: 'name',defaultValue: '', description: 'please enter your name')
      choice(name: 'age', choices: ['20','21','22'])
  }
  stages {
    stage('test') {
       when {
          expression {
            env.BRANCH_NAME == 'test'
          }
        }
      steps {
        withCredentials([usernamePassword(credentialsId: 'testcred',passwordVariable: 'pass',usernameVariable: 'user')]) {
        echo "inside the test ${params.name}"
                                          echo "user ${user}"
                                          echo "pass ${pass}"
                                          }
      }
    }
      stage('build') {
      steps {
        echo "inside the build ${params.age}"
      }
    }
  }
}
