class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error('There is not enough space on the hard drive');
        }
        const currentProgram = {
            name,
            requiredSpace,
        };

        this.hddMemory -= requiredSpace;
        this.installedPrograms.push(currentProgram);

        return currentProgram;
    }

    uninstallAProgram(name) {
        const currentProgram = this.installedPrograms.find(x => x.name === name);
        if(!currentProgram){
            throw new Error('Control panel is not responding');
        }

        this.installedPrograms.splice(this.installedPrograms.indexOf(currentProgram), 1);
        this.hddMemory += currentProgram.requiredSpace;

        return this.installedPrograms;
    }

    openAProgram(name) {
        const currentProgram = this.installedPrograms.find(x => x.name === name);
        if(!currentProgram){
            throw new Error (`The ${name} is not recognized`);
        }
        if(this.taskManager.find(x => x.name === name)){
            throw new Error(`The ${name} is already open`);
        }
        const ramUsage = (currentProgram.requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = (currentProgram.requiredSpace / this.cpuGHz / 500) * 1.5;

        const totalRam = this.taskManager.reduce((acc, curr) => acc + curr.ramUsage, 0);
        const totalCPU = this.taskManager.reduce((acc, curr) => acc + curr.cpuUsage, 0); 
 
        if(totalRam + ramUsage >= 100){
            throw new Error(`${name} caused out of memory exception`);
        }
        if(totalCPU + cpuUsage >= 100){
            throw new Error(`${name} caused out of cpu exception`);
        }
        const runProgram = {
            name,
            ramUsage,
            cpuUsage,
        };

        this.taskManager.push(runProgram);

        return runProgram;
    }

    taskManagerView() {
        if(this.taskManager.length === 0){
            return 'All running smooth so far';
        }
        return this.taskManager
            .map(x => `Name - ${x.name} | Usage - CPU: ${x.cpuUsage.toFixed(0)}%, RAM: ${x.ramUsage.toFixed(0)}%`).join('\n');
    }
}


// const computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram('Word', 7300);
// computer.installAProgram('Excel', 10240);
// computer.installAProgram('PowerPoint', 12288);
// computer.uninstallAProgram('Word');
// computer.installAProgram('Solitare', 1500);

// computer.openAProgram('Excel');
// computer.openAProgram('Solitare');

// console.log(computer.installedPrograms);
// console.log(('-').repeat(50)); // Separator
// console.log(computer.taskManager);


const computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');
console.log(computer.taskManagerView());

