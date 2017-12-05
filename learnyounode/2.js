console.log(process.argv.reduce((acc, curr, index) => {
    if(index > 1){
      return acc + Number(curr)
    }
    return 0
  }, 0)
)