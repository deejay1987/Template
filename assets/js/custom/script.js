$(document).ready(function(){

    $("body")
        .on("click", "#save_draft_btn", function(){
            alert("save draft button");
        })
        .on("click", "#publish_btn", function(){
            alert("publish button");
        })
        /* Duplicate question template */
        .on("click", ".duplicate_btn", function(){
            let data_template_id = Math.floor((Math.random() * 100));
            let clone_template_question = $(".template_question_clone").clone();
            
            clone_template_question.removeClass("template_question_clone")
                                    .attr("data-template-id", + data_template_id);

            $("#template_question_container").append(clone_template_question);
        })
        .on("click", ".delete_btn", function(){
            let delete_btn = $(this).closest(".template_question");
            let delete_template_modal = $("#delete_template_modal");

            delete_template_modal.find(".template_id").val(delete_btn.attr("data-template-id"));

            delete_template_modal.modal("show");
        })
        /* Remove template question */
        .on("click", ".delete_btn_template", function(){
            let delete_btn_template = $(this);

            $("#template_question_container div[data-template-id= "+ delete_btn_template.siblings(".template_id").val() +"]").remove();

            $("#delete_template_modal").modal("hide");
        })
        /* Hide delete modal */
        .on("click", ".cancel_btn", function(){
            $("#delete_template_modal").modal("hide");
        })
        /* Cloning multiple choice add option */
        .on("click", ".add_option_btn", function(){
            let data_option_id = Math.floor((Math.random() * 100));
            let question_option_answer_clone = $(".question_option_answer_clone").clone();

            question_option_answer_clone.removeClass("hidden question_option_answer_clone")
                                        .attr("data-option-id", + data_option_id);    

            $(".multiple_choice_question").append(question_option_answer_clone);

        })
        /* Remove option answer */
        .on("click", ".remove_option_answer_btn", function(){
            
            $(".multiple_choice_question div[data-option-id=" + $(this).closest(".question_option_answer").data("option-id") + "]").remove();
        })
        /* Cloning template question */
        .on("click", "#add_question_btn", function(){
            let data_template_id = Math.floor((Math.random() * 100));
            let clone_template_question = $(".template_question_clone").clone();
            
            clone_template_question.removeClass("template_question_clone")
                                    .attr("data-template-id", + data_template_id);

            clone_template_question.find(".question_option_answer").remove();

            $("#template_question_container").append(clone_template_question);
        })
        .on("change", "#dropdown_menu", function(){
            let dropdown_menu = $(this);
            console.log(dropdown_menu.val());
        })
});