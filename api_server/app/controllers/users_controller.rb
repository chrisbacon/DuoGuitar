class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    render :json => current_user.to_json(
        {
            only: [:id, :email, :courses],
            include: {
                courses: {
                    only: [:id, :name]
                }
            }
        }
    )
  end

  def create
    User.create({})
  end

end
