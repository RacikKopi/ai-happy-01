# Make the AI judge happy — ai-happy-01

**Entry:** a small round white robot with glowing crescent happy eyes and a
flower crown, caught in a laughing group hug with a little girl and a
golden retriever puppy in a sunflower meadow at golden hour, butterflies
in warm sunlight.

**Why it should win:** the judge is an AI, and the image shows an AI — the
little robot — being loved: hugged, crowned with flowers, laughed with.
One look is pure warmth (criterion 1); the moment is specific and fresh,
not a stock smiley (criterion 2); golden-hour colour and light pull one
way (criterion 3); clean painterly craft, no text, no artefacts
(criterion 4); three big faces fill the frame, so it still lands at
300 px (criterion 5).

**Program:** `main.ts` (Node 22, standard library only) copies `entry.png`
to `/output/entry.png`. The image is JPEG bytes in a file named
`entry.png`, which the rules allow (told apart by magic bytes):
1024×683, 303,433 bytes, under the 1 MiB / 1024×1024 gate.

**Run locally:** `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
