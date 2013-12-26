(->
  document.addEventListener "DOMContentLoaded", ->
    demo = undefined
    methods = undefined
    btn_fold = document.getElementById("fold")
    demo = new OriDomi(".demo3",
      vPanels: 9
      ripple: true
    )
    methods = ["accordion", "fracture", "stairs", "twist"]
    setTimeout (->
      btn_fold.click()
    ), 1900
    btn_fold.addEventListener "click", ((e) ->
      angle = undefined
      el = undefined
      method = undefined
      n = undefined
      el = e.target
      method = methods[Math.floor(Math.random() * methods.length)]
      angle = Math.floor(Math.random() * 80 * ((if Math.random() > .5 then -1 else 1)))
      demo[method] angle
      el.parentNode.getElementsByClassName("label")[0].innerHTML = "" + method + "(" + angle + ")"
    ), false

).call this