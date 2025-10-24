// "Searching" - A Strudel composition exploring the unknown
// Copy this code into https://strudel.cc/
// @by Donnie Vedder

setcps(0.5)

stack(
  // Enigmatic bass - questions without answers
  "<Dm7 Em7 F#m7 Gm7>/8"
    .voicing('lefthand')
    .note()
    .s('sawtooth')
    .cutoff(sine.slow(12).range(150, 400))
    .resonance(15)
    .gain(0.25)
    .attack(2).release(4)
    .room(0.9).size(0.9),
  
  // Whispered melody - clues half-revealed
  "<[d4 ~ f4 ~] [e4 ~ g4 ~] [f#4 ~ a4 ~] [g4 ~ bb4 ~]>/4"
    .note()
    .s('gm_blown_bottle')
    .speed(rand.range(0.95, 1.05))
    .gain(perlin.range(0.2, 0.4))
    .pan(perlin.range(0.2, 0.8))
    .room(0.8).size(0.9)
    .delay(0.5).delaytime(0.5).delayfeedback(0.6),
  
  // Shadowy arpeggios - patterns in the dark
  "<[d5 f5 a5 c6] [e5 g5 b5 d6] [f#5 a5 c#6 e6] [g5 bb5 d6 f6]>/2"
    .off(1/8, x=>x.add(12))
    .off(1/4, x=>x.sub(7))
    .note()
    .s('triangle')
    .cutoff(2000)
    .gain(0.2)
    .attack(0.05).decay(0.3)
    .degradeBy(sine.slow(4).range(0.2, 0.5))
    .pan(sine.slow(2)),
  
  // Sparse percussion - footsteps in fog
  s("[~ ~ bd:3 ~]*2")
    .speed(0.7)
    .gain(0.4)
    .room(0.7)
    .hpf(100),
  
  // Glitchy texture - reality uncertain
  s("~ ~ [insect:2 insect:5]")
    .speed(rand.range(0.3, 2))
    .gain(rand.range(0.15, 0.3))
    .pan(rand)
    .degradeBy(0.6)
    .delay(0.8).delayfeedback(0.7),
  
  // High shimmer - hidden knowledge
  "<a5 ~ b5 ~ c#6 ~ d6 ~>/2"
    .add(perlin.range(-0.2, 0.2))
    .note()
    .s('sine')
    .gain(sine.slow(16).range(0.05, 0.2))
    .attack(3).release(4)
    .room(1).size(1)
    .degradeBy(0.7),
  
  // Reversed whispers - secrets backwards
  s("~ ~ ~ [voice:4 voice:7]")
    .speed(-rand.range(0.5, 1.2))
    .gain(0.25)
    .pan(rand)
    .room(0.9)
    .hpf(500)
    .degradeBy(0.8),
  
  // Deep rumble - what lurks beneath
  note("<d1 e1 f#1 g1>/16")
    .s('square')
    .cutoff(80)
    .gain(0.15)
    .attack(8).release(10)
    .room(0.8),
  
  // Metallic bells - distant clues
  s("~ ~ ~ ~ ~ ~ metal:3 ~")
    .speed(rand.range(0.4, 0.8))
    .gain(rand.range(0.15, 0.25))
    .room(1).size(1)
    .delay(0.9).delaytime(rand.range(0.25, 0.75)).delayfeedback(0.8)
    .pan(rand)
)