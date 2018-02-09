(function(){

new Vue({
  el: '#content',

  data: {
    error: false,
    loading: false,
    typing: false,
    email: ""
  },

  created: function() {

  },

  methods: {

    validEmail: function(s) {
      return this.email.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,20}$/i);
    },

    notify: function() {
      if (!this.validEmail()) {
        return alert("E-postadressen ser inte riktigt rätt ut");
      }
      var self = this;
      jQuery.post("/notify", { email: self.email.trim() }, function(){
        self.email = "";
        alert("Super, vi meddelar när allt är uppe. Tack!");
      });
    }

  }
});

})()
