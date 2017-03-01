Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}

  scope path: "api" do
    resources :courses, defaults: {format: :json}
    resources :subscribed_courses
    resources :subscribed_lessons
    resources :subscribed_exercises
  end

  resources :users


end
