These scripts generate a PoE item filter file tailored to my exact preferences.

PoE filters are limited in that:

- They can only match sets of conditions with *AND* boolean checks
- Each item is matched against the sets of conditions in sequence. The first match found leads to applying the relevant effects before terminating further checks
- There is a way to `Continue`, but it is exceptionally hard to "undo" already applied effects

This script works by generating all permutations of possible combinations. This allows items to be matched to exactly one condition set and only ever have one set of effects applied, alleviating the undo problem.

To avoid creating too many redundant permutations, there are different `PermutationMaker`s that operate independently, whose outputs later get combined into the same file. There is also an optimisation step that can greatly reduce the number of filter blocks, by combining condition sets that have the same effects. Because some conditions don't have associated inverses, these need to get sorted to the top of the file, so that a more lenient check doesn't end up getting matched first.

# How It Looks

Notes:

- Avoid white/blue/yellow/orange/lime/teal text as vanilla does similar
- Avoid white/orange outlines as vanilla does similar
- Minimap defaults are kite and small

## Others

### Type

- Labyrinth items
	- Text recoloured from default beige to green
	- Background white
	- Minimap: Lime house medium
- Divination cards
	- (Text colour stays azure)
	- Background white
	- Minimap: Cyan house medium
- Skill gems
	- (Text colour stays teal)
	- Background white
	- Minimap: Cyan house medium
- Currencies
	- Text recoloured from default beige to green
	- Background white
	- Minimap: Lime house
- Quest items
	- (Text colour stays lime)
	- Background white
	- (Minimap: Vanilla has green exclamation mark)
- Others
	- Minimap: Pink house

## Equipment

Works through a system of hide immunity. Anything not hide immune by the end of the process gets shrunk & unmapped:

- Text resized to smallest
- Background faded
- Silenced
- Removed from minimap

Also has a system of fluff outlines. Anything deemed to have fluff outlines will additionally get its outline removed when shrunk & unmapped.

### Rarity

- Normal
	- Minimap: Silver
- Magic
	- Minimap: Blue
- Rare (hide immune)
	- Minimap: Yellow medium
- Unique (hide immune)
	- Text resized to largest
	- Background white
	- Minimap: Orange large
	- Beam: Orange

### Pre-sockets

- Quality
	- Outlined magic colour
	- Minimap: Hexagon

### Sockets

- 6 (hide immune)
	- Outlined rose
	- Minimap: Star medium
- RGB (hide immune)
	- Outlined purple
	- Minimap: Raindrop
- Looty base/modifier (hide immune)
	- Outlined lime
	- Minimap: Circle
- 5
	- Outlined rose
	- Minimap: Star
- 4
	- Outlined yellow
	- Minimap: Cross
- White
	- Outlined pink
	- Minimap: Pentagon
- 3 link
	- Outlined normal colour
	- Minimap: Diamond

### Post-sockets

- Corrupted (hide immune)
	- Outlined corrupted colour
	- Minimap: Triangle
- Mirrored (hide immune)
	- Outlined navy
	- Minimap: Moon

### Equipment

- Witch weapons / armour
	- Normal
		- 4/5 (hide immune)
	- Magic
		- Quality (hide immune)
		- White/4/5 (hide immune)
- Unused weapons (fluff outline)
