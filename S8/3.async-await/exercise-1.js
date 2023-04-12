


const runTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  
  async function execute() {
    await runTimeOut();
    console.log('Time out!');
  }
  
  execute();
  