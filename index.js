$(function addNewItem(){
    
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        let newItem = this.find('input[name="shopping-list-entry"]').val();
        $('.shopping-list').append(
            `<li>   
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`);
    });
});

//create a function for adding new items append() html()
    //check for key press of return or clicking button.
    //retrive value and store it
    //create empty html element for new value
    //place store value in new element



$(function checkItem(){
    $('.shopping-item-toggle').on('click', function() {
        $(this).closest('span').toggleClass('shopping-item__checked');
    });
    
});
//create  a function for checking items on/off items, .toggle()
    //check for clicking of check button.
    //edit html to cross out item or uncross with .toggle()


$(function deleteItem() {
    $('.shopping-item-delete').on('click', function() {
        $(this).closest('li').remove();
    });
});

//create a function to remove items from list. .remove()
    //check for clicking of delte button
    //remove html element