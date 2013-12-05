document.addEventListener 'DOMContentLoaded', ->

  unless OriDomi.isSupported
    document.getElementById('unsupported').style.display = 'block'
    return

  demos = [
    #new OriDomi '.demo2', maxAngle: 89, ripple: true
    new OriDomi '.demo3', vPanels: 8, ripple: true
  ]

  setTimeout ->
    demos[0].twist -73
    # demos[1].reveal 40
  , 1000


  methods = ['accordion', 'curl', 'reveal', 'fracture', 'ramp', 'stairs', 'twist']

  document.getElementById('demos').addEventListener 'click', (e) ->

    return unless (el = e.target).className is 'button'
    n      = el.getAttribute 'data-n'
    method = methods[Math.floor Math.random() * methods.length]
    angle  = Math.floor Math.random() * 80 * (if Math.random() > .5 then -1 else 1)

    demos[n][method] if method isnt 'foldUp' then angle else undefined
    #angle = '' if method is 'foldUp'

    el.parentNode.getElementsByClassName('label')[0].innerHTML = "#{ method }(#{ angle })"

  , false
