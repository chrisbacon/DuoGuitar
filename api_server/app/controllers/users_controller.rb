class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: current_user.courses
  end

end
