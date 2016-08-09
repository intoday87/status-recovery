define([
  'jquery',
  './form.hbs',
  './form.scss'
], function ($, tmpl) {
  var DOM = {
      component: '[data-component="form"]',
      form     : '[data-form]',
      name     : 'input[name="name"]',
      password : 'input[type="password"]',
    },
    ACTION_TYPE = 'FORM_DATA';

  function formActionCreator() {
    return {
      type: ACTION_TYPE,
      email: $(DOM.name).val(),
      password: $(DOM.password).val()
    }
  }

  function bindEventToSubmit(store) {
    $(DOM.form).off().on('submit', function () {
      store.dispatch(formActionCreator());
    });
  }

  return {
    reducer: function (state, action) {
      if (state === undefined) {
        return {
          name    : '',
          password: ''
        };
      }

      switch (action.type) {
        case ACTION_TYPE:
          return {
            name    : action.email,
            password: action.password
          };
        default:
          return state;
      }
    },
    build  : function (store) {
      bindEventToSubmit(store);
      store.subscribe(function () {
        var state = store.getState();
        window.console.log("subscribed state : " + (typeof state === 'object' ? JSON.stringify(state) : state));
        $(DOM.component).html(tmpl(store.getState().form));
      });

      $(DOM.component).html(tmpl(store.getState().form));
    }
  }
});
