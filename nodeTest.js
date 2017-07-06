/**
 * Created by dcpdev on 7/6/17.
 */
var exec = require('child_process').exec;
var cmd = 'git log';


exec(cmd, function(error, stdout, stderr) {
  stdout.split('commit ')
    .forEach(currentCommit => {
      const lines = currentCommit.split('\n');
      const [ commitHash ] = lines;
      const isGitCommit = commitHash.length === 40;

      if ( isGitCommit ){
        let author = lines.find( line => line.indexOf('Author') === 0) || 'No Author';
        let message = lines[4];

        while ( author.length < 70) {
          author += ' ';
        }

        if(isGitCommit) {
          console.log(`${author} | Sha#: ${commitHash}`);
          console.log(`\t Commit Message ${ message }  \n`)
        }
      }
    });
});

