$(document).ready(function(){
    let count = 2;

    $("body")
        .on("click", "#save_draft_btn", function() {
            alert("save draft button");
        })
        .on("click", "#publish_btn", function() {
            alert("publish button");
        })
        /* Duplicate question template */
        .on("click", ".duplicate_btn", function() {
            
            /* find template_question of $(this) */
            let duplicate_btn = $(this);

            /* clone template_question */
            let template_question = duplicate_btn.closest(".template_question").clone();
            let question_id = count++;

            /* replace question_id of duplicated template_question */
            template_question.attr("data-question_id", question_id);
            template_question.attr("id", "template_question_" + question_id);

            /* append clone */
            $("#template_question_container").append(template_question);
        })   
        .on("click", ".delete_btn", function() {
            let delete_btn = $(this).closest(".template_question");
            let delete_template_modal = $("#delete_question_modal");
            let delete_question_id = delete_btn.attr("data-question_id");
            
            delete_template_modal.find(".delete_question").val(delete_question_id);

            delete_template_modal.modal("show");
        })
        /* Remove template question */
        .on("click", ".delete_question_btn", function() {  
            let delete_question_btn = $(this);
            let delete_question_id = delete_question_btn.siblings(".delete_question").val();
            
            // class instead of data-
            $("#template_question_" + delete_question_id).remove();

            $("#delete_question_modal").modal("hide");
        })
        /* Cloning multiple choice add option */
        .on("click", ".add_option_btn", function() {
            let multiple_choice_add_option = $(this).closest(".add_option_container").prev();
            let question_option_answer_clone = $(".question_option_answer_clone").clone();

            question_option_answer_clone.removeClass("hidden question_option_answer_clone");

            multiple_choice_add_option.append(question_option_answer_clone);

        })
        /* Remove option answer */
        .on("click", ".remove_option_answer_btn", function() {
            
            $(this).closest(".question_option_answer").remove();

        })
        /* Cloning template question */
        .on("click", "#add_question_btn", function() {
            let clone_template_question = $(".template_question_clone").clone();
            let multiple_choice_content_clone = $(".multiple_choice_content_clone").clone();
            // Use Javascript to get time in milliseconds; Use result as question_id
            let question_id = count++;
            
            clone_template_question.removeClass("template_question_clone")
                                    .attr("data-question_id", question_id);

            clone_template_question.attr("id", "template_question_" + question_id);
            multiple_choice_content_clone.removeClass("multiple_choice_content_clone");  

            clone_template_question.find(".question_content").html(multiple_choice_content_clone);
            clone_template_question.find(".question_option_answer").remove();

            $("#template_question_container").append(clone_template_question);
        })
        .on("change", ".select_dropdown_menu", function() {
            let select_dropdown_menu = $(this);
            // find parent template_question
            let template_question = select_dropdown_menu.closest(".template_question");
            let question_content = template_question.find(".question_content");
            let paragraph_container = $(".paragraph_content_clone").clone().removeClass("paragraph_content_clone");
            let multiple_choice_content_clone = $(".multiple_choice_content_clone").clone().removeClass("multiple_choice_content_clone");

            // clear content of question_content
            question_content.empty();

            // base on value on dropdown, clone and append content to question_content
            if(select_dropdown_menu.val() == "1"){
                question_content.html(multiple_choice_content_clone);
            }
            else{
                question_content.html(paragraph_container);
            }
            /* To do */
            /* add selected = "selected" to clicked option */
        })
});