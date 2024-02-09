### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 24; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(GRASS) || CodeCosmos.testForBlock_belowAgent(DIRT)) {
            CodeCosmos.placeTree()
        } else {
            CodeCosmos.placeBush()
        }
    }
})
```

```template
player.onChat("level2", function () {
    for (let index = 0; index < 24; index++) {
        AgentExtension.agentMoveForward()
        
    }

})
```

## Multiple Selection
If the Agent is on a block of grass OR on a block of dirt, he plants a tree, otherwise he plants grass.