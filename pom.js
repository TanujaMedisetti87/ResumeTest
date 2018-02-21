grunt.initConfig({
  nexusDeployer: {
    release: {
      options: {
          groupId: "nexus-deployer",
          artifactId: "nexus-deployer",
          version: "1.0",
          packaging: 'zip',http://ec2-54-209-206-172.compute-1.amazonaws.com:8081
          auth: {
            username:'admin',
            password:'admin123'
          },
          pomDir: 'pom',
          url: 'http://ec2-54-209-206-172.compute-1.amazonaws.com:8081/nexus/content/repositories/releases',
          artifact: 'build/grunt-nexus-deployer.zip',
          noproxy: 'http://ec2-54-209-206-172.compute-1.amazonaws.com',
          cwd: ''
        }
      }
    }
});
