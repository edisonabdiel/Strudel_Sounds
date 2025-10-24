// "Tension" - Dark, groovy and sinister
// @by Donnie Vedder
setcps(0.5)

stack(
  // Groovy but heavy kick pattern
  s("bd ~ ~ bd ~ ~ bd ~")
    .gain(0.75)
    .speed(0.85)
    .room(0.3),
  
  // Snare with some syncopation
  s("~ ~ sd ~ ~ sd:2 ~ sd")
    .gain(0.6)
    .room(0.4),
  
  // Steady hi-hats with variation
  s("hh*8")
    .gain(sine.slow(4).range(0.25,0.35))
    .speed(1.1)
    .pan(sine.slow(2).range(0.4,0.6)),
  
  // Dark chord progression with tension
  note("<Dm7 Ebm7 Em7 F#m7>/4")
    .voicing()
    .s('sawtooth')
    .cutoff(sine.slow(8).range(350,700))
    .resonance(14)
    .gain(0.32)
    .attack(0.8).release(2)
    .room(0.7),
  
  // Sinister melody that rises chromatically
  note("<d4 eb4 e4 f4 f#4 g4 ab4 a4>/8")
    .s('gm_music_box')
    .gain(0.38)
    .attack(0.15).release(0.6)
    .room(0.8)
    .delay(0.4).delaytime(0.375).delayfeedback(0.3),
  
  // Tritone bass line - the tension anchor
  note("<D2 ~ Ab2 ~ D2 ~ A2 ~>/2")
    .s('square')
    .cutoff(sine.slow(6).range(250,500))
    .gain(0.42)
    .attack(0.08).release(0.7)
    .room(0.4),
  
  // Sub bass for depth and darkness
  note("<D1 ~ ~ ~ Ab1 ~ ~ ~>/2")
    .s('sine')
    .gain(0.35)
    .attack(0.4).release(1.5)
    .room(0.3),
  
  // Atmospheric pad for ominous backdrop
  note("<Dm Ebm Em F#m>/8")
    .chord("m9")
    .voicing()
    .s('triangle')
    .cutoff(400)
    .gain(0.18)
    .attack(4).release(6)
    .room(0.9),
  
  // Percussion accent for groove
  s("~ ~ ~ cp ~ ~ cp:2 ~")
    .gain(0.5)
    .room(0.5)
    .delay(0.3).delayfeedback(0.2),
  
  // Reversed cymbal for cinematic tension
  s("~ ~ ~ ~ ~ ~ ~ [metal metal:2]")
    .speed(-rand.range(0.4,0.6))
    .gain(0.28)
    .room(1).size(1)
    .degradeBy(0.4)
)