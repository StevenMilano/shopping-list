$(function addNewItem(){
    
    //function for adding new items
    $('#js-shopping-list-form').submit( function() {
        event.preventDefault();
        let newItem = $(this).find('input[name="shopping-list-entry"]').val();
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
            //resets input field to placeholder text after submit is clicked  
            $('#js-shopping-list-form').children('input').val('');
    }); 
});

//function to check off an item
$(function checkItem(){
    $('ul').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    
});

//function to delete an item off the list
 $(function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
});