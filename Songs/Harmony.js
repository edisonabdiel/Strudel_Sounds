// "Harmony" - A Strudel composition representing balance and unity
// Copy this code into https://strudel.cc/
// @by Donnie Verdder


setcps(0.6)

stack(
  // Foundation: Peaceful bass progression
  "<C2 F2 G2 Am2>/4"
    .note()
    .s('sawtooth')
    .cutoff(400)
    .resonance(8)
    .gain(0.3)
    .attack(0.5).decay(2).sustain(0.3)
    .room(0.5).size(0.8),
  
  // Melody: Flowing and connected
  "<<c4 e4 g4 c5> <f4 a4 c5 f5> <g4 b4 d5 g5> <a4 c5 e5 a5>>/4"
    .slow(2)
    .note()
    .s('gm_music_box')
    .gain(0.4)
    .room(0.7).size(0.9)
    .delay(0.3).delaytime(0.375).delayfeedback(0.4),
  
  // Harmony: Interwoven voices
  "<[c4,e4,g4] [f4,a4,c5] [g4,b4,d5] [a4,c5,e5]>/4"
    .note()
    .s('gm_acoustic_guitar_nylon')
    .gain(0.25)
    .attack(0.3).release(1.2)
    .room(0.6),
  
  // Rhythm: Gentle pulse - unity in time
  s("~ bd ~ bd")
    .speed(0.9)
    .gain(0.3)
    .lpf(800),
  
  // Texture: Soft hi-hats - continuity
  s("hh*4")
    .speed(rand.range(0.8, 1.2))
    .gain(sine.slow(8).range(0.15, 0.25))
    .pan(sine.slow(3).range(0.3, 0.7))
    .hpf(3000),
  
  // Countermelody: Complementary voice
  "<e5 ~ d5 c5 ~ a4 ~ g4>/2"
    .note()
    .s('gm_flute')
    .gain(0.3)
    .attack(0.2).release(0.8)
    .room(0.8).size(0.9)
    .degradeBy(0.3),
  
  // Depth: Ambient pad - the space between
  "<C3 F3 G3 Am3>/8"
    .chord("^7")
    .voicing()
    .note()
    .s('square')
    .cutoff(sine.slow(16).range(300, 600))
    .gain(0.15)
    .attack(4).release(6)
    .room(0.9).size(1),
  
  // Accent: Bell-like moments of clarity
  "~ ~ c6 ~ ~ ~ g5 ~"
    .note()
    .s('gm_tubular_bells')
    .gain(0.2)
    .room(0.8)
    .degradeBy(0.5)
)