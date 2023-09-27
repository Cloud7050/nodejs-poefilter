These scripts generate a PoE item filter file tailored to my exact preferences.

PoE filters are limited in that:

- They can only match sets of conditions with *AND* boolean checks
- Each item is matched against the sets of conditions in sequence. The first match found leads to applying the relevant effects before terminating further checks
- There is a way to `Continue`, but it is exceptionally hard to "undo" already applied effects

This script works by generating all permutations of possible combinations. This allows items to be matched to exactly one condition set and only ever have one set of effects applied, alleviating the undo problem.

To avoid creating too many redundant permutations, there are different `PermutationMaker`s that operate independently, whose outputs later get combined into the same file. There is also an optimisation step that can greatly reduce the number of filter blocks, by combining condition sets that have the same effects. Because some conditions don't have associated inverses, these need to get sorted to the top of the file, so that a more lenient check doesn't end up getting matched first.

# How It Looks

Notes:

- Avoid white/silver/blue/yellow/orange/lime/teal text as vanilla does similar
- Avoid white/silver/orange outlines as vanilla does similar
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

Starts with everything being hidden. Through the processing stages, decides what is worth showing. Visibility should only go up, so the decision is made carefully.

Shown items are either shown normally, or shown shrunk/unmapped:

- Text resized to smallest
- Background faded
- Silenced
- Removed from minimap

### Rarity

- Normal
	- Minimap: Silver
- Magic
	- Minimap: Blue
- Rare (show)
	- Minimap: Yellow medium
- Unique (show)
	- Text resized to largest
	- Background white
	- Minimap: Orange large
	- Beam: Orange

### Pre-sockets

- Quality (show)
	- Outlined magic colour
	- Minimap: Hexagon

### Sockets

6/RGB have vendor recipes. Looty items may be used.

- 6 (show)
	- Outlined rose
	- Minimap: Diamond large
	- Beam: Rose
- RGB (show)
	- Outlined purple
	- Minimap: Raindrop medium
- 5
	- Outlined yellow
	- Minimap: Star medium
- Looty base/modifier
	- Outlined lime
	- Minimap: Circle medium
- 4
	- Outlined cyan
	- Minimap: Cross
- White
	- Outlined pink
	- Minimap: Pentagon
- 3 link
	- Outlined grey
	- Minimap: Kite

### Post-sockets

Corrupted may have special modifiers, which may be vendored even if not used due to sockets etc.

Mirrored may have dropped dupes which may be vendored together.

- Corrupted (show)
	- Outlined corrupted colour
	- Minimap: Triangle medium
- Mirrored (show)
	- Outlined navy
	- Minimap: Moon

### Multi-visibility

Anything whose visibility is not a blanket guaranteed show yet should be decided here based on multiple conditions.

For equipment we use, based on rarity, we may use them if the sockets are notable enough.

- Witch weapons / armour
	- 5/looty (show)
	- Normal
		- 4 (shrink/unmap)
	- Magic
		- White/4 (shrink/unmap)
- Unused weapons
