class CardsController < ApplicationController
  skip_before_action :authorize, only: %i[show]
  before_action :set_card, only: %i[show edit update destroy]
  before_action :set_user, only: %i[edit]

  def new
    @card = Card.new
  end

  def create
    @card = @current_user.cards.new(card_params)

    if @card.save
      redirect_to @card
    else
      redirect_to new_card_url, alert: 'Invalid title/description combination'
    end
  end

  def show; end

  def index
    @cards = Card.where(user_id: @current_user)
  end

  def edit
    unless @current_user.id == @card.user_id
      # fix
      flash[:alert] = 'You do not have permit to update'
      redirect_to @user
    end
  end

  def update
    if @current_user.id == @card.user_id
      if @card.update(card_params)
        redirect_to @card
      else
        redirect_to edit_card_url, alert: 'Invalid title/description editing'
      end
    else
      # fix
      flash[:alert] = 'You do not have permit to update'
    end
  end

  def destroy
    if @current_user.id == @card.user_id
      @card.destroy
      redirect_to cards_path
    end
  end

  private

  def set_user
    @user = User.find_by(id: session[:user_id])
  end

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:title, :description)
  end
end
