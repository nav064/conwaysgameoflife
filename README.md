# Conway's Game of Life - An oversimplified version though

Use function "play" to run the game.

### play function has these parameters

**board** - 2 dimensional array. The output will be captured in this. The bigger the board is, the more interesting the output gets. <br/> 
**state** - 2 dimensional array. The initial state of the board. Watch the fun when you change values on this. <br/> 
**timeline** - Number of times the conway propagation needs to run/repeat. This is equivalent to time in the realistic sense.<br/> 


### States of the cells in each array

**0** - dead organism <br/>
**1** - live organism


### Running the program

```shell
git clone https://github.com/nav064/conwaysgameoflife.git

cd conwaysgameoflife

npm run dev

```

### Limitations

1. The board and state are equi-dimensional. 10X10 in this case. We can generalize to nXn.  
2. How the organism lives or dies does not take into account any practical features. It is only a statistical representation inspired by Conway's Game rule. 

Please feel free to comment/test/reuse/modify. 


The eventual question I had is **"Are we just a Conway's game of our genes?"** 
