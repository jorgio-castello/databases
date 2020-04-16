var MessageView = {

  render: _.template(`
      <!--

      -->
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(user) ? 'friend' : '' %>"
          data-username="<%- user %>">
          <%- user %>
        </div>
        <div><%- messageText %></div>
      </div>
      <!--
            -->
    `)

};