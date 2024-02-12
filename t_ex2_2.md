### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 24; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(GRASS) && AgentExtension.agentNextToBamboo()) {
            CodeCosmos.spawnPanda()
        } else if (CodeCosmos.agentOnFire()) {
            CodeCosmos.extinguishFire()
        } else {
            CodeCosmos.placeBush2()
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
If the Agent is on a block of grass AND next to bamboo, he spawns a panda. Otherwise if the Agent is on a block of fire, then he extinguishes it, otherwise he plants a bush.