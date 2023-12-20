"use strict";
!function() {
    var a = document.querySelector("#TagifyBasic"), a = (new Tagify(a),document.querySelector("#TagifyReadonly")), a = (new Tagify(a),
        document.querySelector("#TagifyCustomInlineSuggestion"))
        , e = document.querySelector("#TagifyCustomListSuggestion")
        , t = ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET"]
        , a = (new Tagify(a,{
        whitelist: t,
        maxTags: 10,
        dropdown: {
            maxItems: 20,
            classname: "tags-inline",
            enabled: 0,
            closeOnSelect: !1
        }
    }),
        new Tagify(e,{
            whitelist: t,
            maxTags: 10,
            dropdown: {
                maxItems: 20,
                classname: "",
                enabled: 0,
                closeOnSelect: !1
            }
        }),
        document.querySelector("#TagifyUserList"));

}();
