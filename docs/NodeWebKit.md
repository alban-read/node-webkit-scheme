[index](helpindex.html)

### Node Web Kit

------------

The scheme web view can run with node-web-kit (NWJS) as the view component.

This initially provides features like the pop up context menu.

------

When using node web kit you have access to run node functions as well as standard browser functions; for example you have access to the operating system via the node os library.

```Scheme
;;
(web-eval "os=require('os')")
(define displayln (lambda (x) (display x)(newline)))
;;
(web-exec "os.hostname();" "displayln")
;;
```

This may or may not be useful; as you have access from scheme to the OS already.

---------

