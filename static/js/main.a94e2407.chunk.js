(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),a=c(2),i=c(1),r=(c(13),c(14),c(15),c(3)),l=c.n(r),o=c(0),d=function(e){var t=e.post,c=e.selectedPost,s=e.setSelectedPost,n=function(){return t.id===(null===c||void 0===c?void 0:c.id)};return Object(o.jsxs)("tr",{"data-cy":"Post",children:[Object(o.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(o.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button","is-link",{"is-light":!n()}),onClick:function(){n()?s(null):s(t)},children:n()?"Close":"Open"})})]},t.id)},j=function(e){var t=e.posts,c=e.selectedPost,s=e.setSelectedPost;return Object(o.jsxs)("div",{"data-cy":"PostsList",children:[Object(o.jsx)("p",{className:"title",children:"Posts:"}),Object(o.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-link-light",children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(d,{post:e,selectedPost:c,setSelectedPost:s},e.id)}))})]})]})},m=c(8),u=(c(17),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),b=function(e){var t=e.createComment,c=e.isLoading,s=Object(i.useState)(""),n=Object(a.a)(s,2),r=n[0],d=n[1],j=Object(i.useState)(""),m=Object(a.a)(j,2),u=m[0],b=m[1],h=Object(i.useState)(""),O=Object(a.a)(h,2),x=O[0],f=O[1],p=Object(i.useState)(!1),N=Object(a.a)(p,2),v=N[0],y=N[1],g=Object(i.useState)(!1),S=Object(a.a)(g,2),C=S[0],P=S[1],k=Object(i.useState)(!1),w=Object(a.a)(k,2),E=w[0],T=w[1];return Object(o.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var c=r.trim(),s=u.trim(),n=x.trim();c||y(!0),s||P(!0),n||T(!0),c&&s&&n&&(f(""),t({name:c,email:s,body:n}))},children:[Object(o.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":v}),value:r,onChange:function(e){d(e.target.value),y(!1)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),v&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),v&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":C}),value:u,onChange:function(e){b(e.target.value),P(!1)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),C&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),C&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("input",{"is-danger":E}),value:x,onChange:function(e){f(e.target.value),T(!1)}})}),E&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:l()("button","is-link",{"is-loading":c}),children:"Add"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-link is-light",onClick:function(){d(""),b(""),f("")},children:"Clear"})})]})]})},h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,s)})).then((function(e){return e.json()}))}var f=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},N=function(e){return x(e,"DELETE")};var v=function(e){var t=e.comment,c=e.removeComment,s=t.id,n=t.name,a=t.email,i=t.body;return Object(o.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(o.jsxs)("div",{className:"message-header",children:[Object(o.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:n}),Object(o.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return c(s)},children:"delete button"})]}),Object(o.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:i})]},s)},y=function(e){var t=e.comments,c=e.removeComment;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(v,{comment:e,removeComment:c},e.id)}))})},g=function(e){var t=e.post,c=t.id,s=t.title,n=t.body,r=Object(i.useState)([]),l=Object(a.a)(r,2),d=l[0],j=l[1],h=Object(i.useState)(!1),O=Object(a.a)(h,2),x=O[0],v=O[1],g=Object(i.useState)(!1),S=Object(a.a)(g,2),C=S[0],P=S[1],k=Object(i.useState)(!1),w=Object(a.a)(k,2),E=w[0],T=w[1],F=Object(i.useState)(!1),L=Object(a.a)(F,2),I=L[0],U=L[1];Object(i.useEffect)((function(){var e;P(!0),T(!1),v(!1),(e=c,f("/comments?postId=".concat(e))).then(j).catch((function(){return v(!0)})).finally((function(){return P(!1)}))}),[t]);return Object(o.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(o.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(c,": ").concat(s)}),Object(o.jsx)("p",{"data-cy":"PostBody",children:n})]}),Object(o.jsxs)("div",{className:"block",children:[C&&Object(o.jsx)(u,{}),x&&!C&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!C&&0===d.length&&Object(o.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!C&&d.length>0&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"title is-4",children:"Comments:"}),Object(o.jsx)(y,{comments:d,removeComment:function(e){v(!1),j(d.filter((function(t){return t.id!==e}))),function(e){return N("/comments/".concat(e))}(e).catch((function(){return v(!0)}))}})]}),!C&&!E&&Object(o.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return T(!0)},children:"Write a comment"})]}),E&&Object(o.jsx)(b,{createComment:function(e){var c={postId:t.id,name:e.name,email:e.email,body:e.body};U(!0),v(!1),function(e){return p("/comments",e)}(c).then((function(e){return j([].concat(Object(m.a)(d),[e]))})).catch((function(){return v(!0)})).finally((function(){return U(!1)}))},isLoading:I})]})})},S=function(e){var t=e.users,c=e.selectedUser,s=e.setSelectedUser,n=Object(i.useState)(!1),r=Object(a.a)(n,2),d=r[0],j=r[1],m=function(e){return c&&c.id===e.id},u=function(){j((function(e){return!e}))};return Object(o.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":d}),children:[Object(o.jsx)("div",{className:"dropdown-trigger",children:Object(o.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:u,children:[Object(o.jsx)("span",{children:c?c.name:"Choose a user"}),Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(o.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(o.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":m(e)}),onClick:function(t){return function(e,t){e.preventDefault(),u(),m(t)||s(t)}(t,e)},children:e.name},e.id)}))})})]})};var C=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),r=Object(a.a)(n,2),d=r[0],m=r[1],b=Object(i.useState)(null),h=Object(a.a)(b,2),O=h[0],x=h[1],p=Object(i.useState)(null),N=Object(a.a)(p,2),v=N[0],y=N[1],C=Object(i.useState)(!1),P=Object(a.a)(C,2),k=P[0],w=P[1],E=Object(i.useState)(!1),T=Object(a.a)(E,2),F=T[0],L=T[1];return Object(i.useEffect)((function(){f("/users").then(s).catch((function(){return w(!0)}))}),[]),Object(i.useEffect)((function(){var e;O&&(L(!0),(e=O.id,f("/posts?userId=".concat(e))).then(m).catch((function(){return w(!0)})).finally((function(){return L(!1)})))}),[O]),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsxs)("div",{className:"tile is-child box is-success",children:[Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(S,{users:c,selectedUser:O,setSelectedUser:x})}),Object(o.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!O&&Object(o.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),O&&F&&Object(o.jsx)(u,{}),!F&&k&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),O&&!F&&!k&&0===d.length&&Object(o.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),O&&!F&&!k&&d.length>0&&Object(o.jsx)(j,{posts:d,selectedPost:v,setSelectedPost:y})]})]})}),Object(o.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":v}),children:v&&Object(o.jsx)("div",{className:"tile is-child box is-success ",children:Object(o.jsx)(g,{post:v})})})]})})})};n.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a94e2407.chunk.js.map