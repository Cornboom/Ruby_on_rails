class UsersController < ApplicationController
  skip_before_action :authorize, only: %i[new create]
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.order(:name)
  end

  def update
    if @user.update(user_params)
      redirect_to users_url
    else
      render 'edit'
    end
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :email, :password, :password_confirmation)
  end
end
