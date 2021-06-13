class CommentsController < ApplicationController
  before_action :set_card

  def create
    @comment = @card.comments.create(comment_params)
    @user = User.find_by(id: @card.user_id)
    CommentMailer.received(@user).deliver_later
    redirect_to @card
  end

  def destroy
    @comment = @card.comments.find(params[:id])
    if @current_user.id == @comment.user_id
      @comment.destroy
      redirect_to @card
    end
  end

  private

  def set_card
    @card = Card.find(params[:card_id])
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id)
  end
end
