const { exec } = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");

// const outputPath = path.join(__dirname, "outputs");

// if (!fs.existsSync(outputPath)) {
//     fs.mkdirSync(outputPath, { recursive: true });
// }

const executePy = (filepath) => {
    // const jobId = path.basename(filepath).split(".")[0];
    // const outPath = path.join(outputPath, `${jobId}.exe`)
    // console.log(jobId);
    // console.log(outPath);
    // console.log(outputPath);

    return new Promise((resolve, reject) => {
        // exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`, (error, stdout, stderr) => {
        exec(`python ${filepath}`, (error, stdout, stderr) => {

            // if (error) {
            //     reject({ error, stderr });
            // }
            // if (stderr) {
            //     reject(stderr);
            // }

            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);
        }
        );
    });
};

module.exports = {
    executePy,
}