# NToastJS
Toast messages
 
* NToast <a href='https://nshanidze.github.io/NToastJS/'>Show to Official Page!</a>
* Made with by nodo-shanidze [nodo-shanidze@mail.ru & shanidzenodo0@gmail.com]
 
* ceated at 11/26/2021
* version (v0.1.5)  12/26/2021 (11:57) Created
* version (v0.1.6) 11/28/2021 Updated (`optimized code, add functions: costum autoclose time, add blur effect, fix bugs safari browser`)

 
 NToast(
 
    (1) => "#5060DC blur",                  ( BACKGOUND COLOR (v0.1.6 -> "blur" option)  )
    (2) =>  "tr",                           ( position:  TR - TopRight / TL - TopLeft | BR - BottomRight | BL - BottomLeft )
    (3) =>  "Welcome To NToastJs v0.1.6",   ( text )
    (4) =>  true,                           ( icon [FALSE,TRUE] )
    (5) =>  "fa fa-check",                  ( change icon only class name [fontawesome or others] )
    (6) =>  true,                           ( show hide progress bar [FALSE,TRUE] )
    (7) =>  "100"                           ( v0.1.6 change autoclose time (if you delete line -> auto on normal speed [125]) )

)
 
 
  
`NToast(
  background,
  position,
  toastMessage,
  showIcon,
  iconClass,
  showProgress,
  autoDismissTime
 )`
  
NToast( 

    "#5060DC", 
    "tr", 
    "Welcome To NToastJs,
    this is beta version",
    true, 
    "fa fa-check",
    true,
    "100"

)

 
