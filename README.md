These scripts generate a PoE item filter file tailored to my exact preferences.

PoE filters are limited in that:

- They can only match sets of conditions with *AND* boolean checks
- Each item is matched against the sets of conditions in sequence. The first match found leads to applying the relevant effects before terminating further checks
- There is a way to `Continue`, but it is exceptionally hard to "undo" already applied effects

This script works by generating all permutations of possible combinations. This allows items to be matched to exactly one condition set and only ever have one set of effects applied, alleviating the undo problem.

To avoid creating too many redundant permutations, there are different `PermutationMaker`s that operate independently, whose outputs later get combined into the same file. There is also an optimisation step that can greatly reduce the number of filter blocks, by combining condition sets that have the same effects. Because some conditions don't have associated inverses, these need to get sorted to the top of the file, so that a more lenient check doesn't end up getting matched first.

# How It Looks

Notes:

- Avoid black/grey/silver text/outlines based on background colours
- Minimap defaults are kite and small

## Others

- Background: Dark grey
- Minimap: House

### Rarity

- Normal
	- Text colour: Silver
	- Minimap: Silver
- Magic
	- Text colour: Blue
	- Minimap: Blue
- Rare
	- Text colour: Yellow
	- Minimap: Yellow medium
- Unique
	- Text size: Largest
	- Text colour: Orange
	- Minimap: Orange large
	- Beam: Orange

### Type

- Others
- Quest items
	- Text colour: Default lime → Lime
	- (Minimap: Vanilla has green exclamation mark)
- Labyrinth items
	- Text colour: Default beige → blue
	- Outline colour: Green
	- Minimap: Blue medium
- Gems
	- Text colour: Default teal → blue
	- Outline colour: Teal
	- Minimap: Blue medium
- Divination cards
	- Text colour: Default azure → yellow
	- Outline colour: Blue
	- Minimap: Yellow medium
- Map items (normal)
	- Text colour: Default white → yellow
	- Outline colour: Default white → yellow
	- Minimap: Yellow medium
- Map items (unique)
	- Text size: Largest
	- Text colour: Default orange → orange
	- Outline colour: Default orange → yellow
	- Minimap: Orange large
	- Beam: Yellow
- Currencies (inexpensive)
	- Text colour: Default beige → blue
	- Outline colour: Lime
	- Minimap: Blue medium
- Currencies (expensive)
	- Text size: Largest
	- Text colour: Default beige → orange
	- Outline colour: Lime
	- Minimap: Orange large
	- Beam: Lime

## Equipment

- Background: Black

Starts with everything being hidden. Through the processing stages, decides what is worth showing. Visibility should only go up, so the decision is made carefully.

Shown items are either shown normally, or shown shrunk/unmapped:

- Text resized to smallest
- Background faded
- Silenced
- Removed from minimap

### Rarity

- Normal
	- Text colour: Silver
	- Minimap: Silver
- Magic
	- Text colour: Blue
	- Minimap: Blue
- Rare (show)
	- Text colour: Yellow
	- Minimap: Yellow medium
- Unique (show)
	- Text size: Largest
	- Text colour: Orange
	- Minimap: Orange large
	- Beam: Orange

### Overwrites

Reasons for showing:

- Fractured can vendor/use
- Quality can vendor/use
- RGB can vendor
- 6 can use/vendor
- Mirrored may have dropped dupes, which can be vendored together
- Corrupted may have special modifiers, which can be vendored even if not used due to bricked sockets etc

These are in order from least to highest overwrite priority (if blocks).

- Fractured (show)
	- (Vanilla has orb icon)
	- Minimap: Medium
- Quality (show)
	- Outline colour: Teal
	- Minimap: Medium
- 3 link
	- Outline colour: Silver
- White
	- Outline colour: White
	- Minimap: Medium
- 4
	- Outline colour: Blue
- RGB (show)
	- Outline colour: Purple
	- Minimap: Raindrop medium
- Looty base/modifier
	- Outline colour: Lime
	- Minimap: Medium
- 5
	- Outline colour: Yellow
	- Minimap: Cross large
- 6 (show)
	- Text size: Largest
	- Outline colour: Orange
	- Minimap: Star large
	- Beam: Orange
- Mirrored (show)
	- Outline colour: Navy
	- Minimap: Moon medium
- Corrupted (show)
	- Outline colour: Crimson
	- Minimap: Moon medium

### Multi-visibility

Anything whose visibility is not a blanket guaranteed show yet should be decided here based on multiple conditions.

For equipment we use, based on rarity, we may use them if the properties are notable enough.

- Witch weapons / armour
	- Looty/5 (show)
	- Normal
		- 4 (shrink/unmap)
	- Magic
		- White/4 (shrink/unmap)
- Unused weapons
