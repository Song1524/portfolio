pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Song1524/portfolio.git'
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials: ['ssh-auth']) {
                    sh '''
                        HOST="ubuntu@43.200.2.49"
                        TARGET="/var/www/html/project"
                        TMP="/home/ubuntu/project_tmp"

                        # 임시 경로 준비
                        ssh -o StrictHostKeyChecking=no $HOST "rm -rf $TMP && mkdir -p $TMP"

                        # 파일 동기화
                        rsync -az --delete \
                          --exclude '.git' \
                          --exclude 'Jenkinsfile' \
                          -e "ssh -o StrictHostKeyChecking=no" ./ $HOST:$TMP/

                        # 서비스 폴더 교체
                        ssh -o StrictHostKeyChecking=no $HOST "
                          sudo rm -rf $TARGET &&
                          sudo mv $TMP $TARGET &&
                          sudo chown -R www-data:www-data $TARGET
                        "

                        # Nginx 리로드
                        ssh -o StrictHostKeyChecking=no $HOST "
                          if command -v nginx >/dev/null 2>&1; then
                            sudo nginx -t && sudo systemctl reload nginx
                          fi
                        "
                    '''
                }
            }
        }
    }
}
