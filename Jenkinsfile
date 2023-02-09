pipeline {
  agent any
  parameters {
      string(name: 'name',defaultValue: '', description: 'please enter your name')
      choice(name: 'age', choices: ['20','21','22'])
  }
  stages {
    stage('test') {
      steps {
        echo "inside the test ${params.name}"
      }
    }
      stage('build') {
      steps {
        echo "inside the build ${params.age}"
      }
    }
  }
}
