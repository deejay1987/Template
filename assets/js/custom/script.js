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
            let clone_template_question = $(".template_question_clone").clone();
            
            clone_template_question.removeClass("template_question_clone")
                                    .attr("data-template-id", + count++);

            /* remove class hidden at question_option_answer_clone after duplicate the template question */
            clone_template_question.find(".question_option_answer_clone").removeClass("hidden question_option_answer_clone").remove();

            $("#template_question_container").append(clone_template_question);
        })
        .on("click", ".delete_btn", function() {
            let delete_btn = $(this).closest(".template_question");
            let delete_template_modal = $("#delete_template_modal");

            delete_template_modal.find(".delete_template_id").val(delete_btn.attr("data-template-id"));

            delete_template_modal.modal("show");
        })
        /* Remove template question */
        .on("click", ".delete_btn_template", function() {  
            let delete_btn_template = $(this);

            $("#template_question_container div[data-template-id= "+ delete_btn_template.siblings(".delete_template_id").val() +"]").remove();

            $("#delete_template_modal").modal("hide");
        })
        /* Hide delete modal */
        .on("click", ".cancel_btn", function() {
            $("#delete_template_modal").modal("hide");
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
            
            clone_template_question.removeClass("template_question_clone")
                                    .attr("data-template-id", + count++);

            clone_template_question.find(".question_option_answer").remove();
            clone_template_question.find(".write_question_here").val("");

            $("#template_question_container").append(clone_template_question);
        })
        .on("change", "#select_dropdown_menu", function() {
            let select_dropdown_menu = $(this).val();
            let paragraph_container = $(".paragraph_container");

            if(select_dropdown_menu == "1"){
                paragraph_container.find(".paragraph_textarea").addClass("hidden");
                paragraph_container.siblings(".write_question_here").removeClass("hidden").val("")
                paragraph_container.siblings(".multiple_choice_question").find("#add_option_action").removeClass("hidden");
            }
            else{
                paragraph_container.find(".paragraph_textarea").removeClass("hidden").val("");
                paragraph_container.siblings(".write_question_here").addClass("hidden");
                paragraph_container.siblings(".multiple_choice_question").find("#add_option_action").addClass("hidden");
            }
        })
});