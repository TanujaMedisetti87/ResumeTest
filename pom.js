var deployer = require('nexus-deployer');
 
var release = {
    groupId: 'com',
    artifactId: 'my-app',
    version: '1.0',
    packaging: 'zip',
    auth: {
      username:'admin',
      password:'admin123'
    },
    pomDir: '',
    url: 'http://ec2-54-209-206-172.compute-1.amazonaws.com:8081/nexus/content/repositories/nexus-repo/',
    artifact: 'my-app.zip',
    noproxy: 'http://ec2-54-209-206-172.compute-1.amazonaws.com',
    cwd: ''
};
 
 
deployer.deploy(release, function(){
    // your async call back here 
    // done(); 
});
